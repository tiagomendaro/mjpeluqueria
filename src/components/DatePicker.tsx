import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, X } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  onClose: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateSelect, onClose }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [disabledTimeSlotsForDay, setDisabledTimeSlotsForDay] = useState<string[]>([]);

  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const disabledDates = [
    new Date(today.getFullYear(), today.getMonth(), 18),
    new Date(today.getFullYear(), today.getMonth(), 19),
  ];

  // Genera los horarios dependiendo del día de la semana
  const generateTimeSlots = (day: Date) => {
    const slots: string[] = [];
    let startHour = 9;
    let endHour = 19;
    
    if (day.getDay() === 0) return []; // Deshabilitar domingos
    if (day.getDay() === 6) endHour = 13; // Sábados hasta las 13:30

    for (let hour = startHour; hour <= endHour; hour++) {
      if (hour === startHour) {
        slots.push(`${hour}:30`);
      } else {
        if (hour === endHour){
          slots.push(`${hour}:00`);
        } else {
          slots.push(`${hour}:00`);
          slots.push(`${hour}:30`);
        }
      }
    }
    return slots;
  };

  const fetchDisabledTimeSlotsForDay = (date: Date) => {
    const disabledSlotsMap: Record<string, string[]> = {
      '2024-11-20': ['10:00', '13:30', '17:00', '19:30'],
    };
    const dateKey = date.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return disabledSlotsMap[dateKey] || [];
  };

  const isDateDisabled = (date: Date) => {
    return (
      disabledDates.some(
        (disabledDate) =>
          disabledDate.getDate() === date.getDate() &&
          disabledDate.getMonth() === date.getMonth() &&
          disabledDate.getFullYear() === date.getFullYear()
      ) || date < today || date.getDay() === 0
    );
  };

  const handleDateClick = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDay(date);
      setDisabledTimeSlotsForDay(fetchDisabledTimeSlotsForDay(date));
      setShowTimeSlots(true);
    }
  };

  const handleTimeSelect = (time: string) => {
    if (selectedDay && !disabledTimeSlotsForDay.includes(time)) {
      const [hours, minutes] = time.split(':').map(Number);
      const dateWithTime = new Date(selectedDay);
      dateWithTime.setHours(hours, minutes);
      onDateSelect(dateWithTime);
      onClose();
    }
  };

  const renderTimeSlots = () => {
    const slots = generateTimeSlots(selectedDay!);
    return (
      <div className="grid grid-cols-3 gap-2">
        {slots.map((time) => {
          const disabled = disabledTimeSlotsForDay.includes(time);
          return (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              disabled={disabled}
              className={`
                p-3 rounded-lg text-sm font-medium transition-colors
                ${disabled
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-gray-200 hover:bg-purple-400/20'}
              `}
            >
              {time}
            </button>
          );
        })}
      </div>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const days = [];
    const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    weekDays.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="text-center font-medium text-gray-400 text-sm py-2">
          {day}
        </div>
      );
    });

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const disabled = isDateDisabled(date);
      const selected = selectedDay?.toDateString() === date.toDateString();

      days.push(
        <button
          key={`day-${day}`}
          onClick={() => handleDateClick(date)}
          disabled={disabled}
          className={`
            p-2 w-full rounded-lg text-sm font-medium transition-colors
            ${disabled ? 'text-gray-600 cursor-not-allowed' : 'hover:bg-purple-400/20'}
            ${selected ? 'bg-purple-400 text-gray-900' : 'text-gray-300'}
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 shadow-xl max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          {showTimeSlots ? (
            <>
              <button onClick={() => setShowTimeSlots(false)} className="flex items-center text-gray-400 hover:text-gray-200">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Volver
              </button>
              <h3 className="text-xl font-bold text-gray-100">
                {selectedDay?.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}
              </h3>
            </>
          ) : (
            <h3 className="text-xl font-bold text-gray-100">
              {currentMonth.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
            </h3>
          )}
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className={showTimeSlots ? '' : 'grid grid-cols-7 gap-1'}>
          {showTimeSlots ? renderTimeSlots() : renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
