"use client"
import { useState, useEffect } from 'react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentTime: '',
    urgency: '',
  });
  const [schedule, setSchedule] = useState([]);
  const [optimizedSchedule, setOptimizedSchedule] = useState({
    'Room 1': [],
    'Room 2': [],
    'Room 3': [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSchedule([...schedule, formData]);
  };

  useEffect(() => {
    const optimizeSchedule = (schedule) => {
      const rooms = {
        'Room 1': [],
        'Room 2': [],
        'Room 3': [],
      };

      const priorities = { high: 1, medium: 2, low: 3 };

      // Sort schedule by urgency
      schedule.sort((a, b) => priorities[a.urgency] - priorities[b.urgency]);

      schedule.forEach((appointment) => {
        const { patientName, appointmentTime, urgency } = appointment;
        let roomAssigned = false;

        Object.keys(rooms).forEach((room) => {
          if (!roomAssigned) {
            const roomSchedule = rooms[room];
            const conflict = roomSchedule.some(
              (a) => a.appointmentTime === appointmentTime
            );

            if (!conflict || urgency === 'high') {
              rooms[room].push({
                patientName,
                appointmentTime,
                optimizedTime: appointmentTime,
                urgency,
              });

              if (conflict) {
                const index = roomSchedule.findIndex(
                  (a) => a.appointmentTime === appointmentTime
                );

                if (index > -1) {
                  const lowUrgencyAppointment = roomSchedule[index];
                  roomSchedule[index] = {
                    patientName,
                    appointmentTime,
                    optimizedTime: appointmentTime,
                    urgency,
                  };

                  rooms[room].push({
                    patientName: lowUrgencyAppointment.patientName,
                    appointmentTime: lowUrgencyAppointment.appointmentTime,
                    optimizedTime: 'High Priority Reassigned',
                    urgency: 'high',
                  });
                }
              }

              roomAssigned = true;
            }
          }
        });
      });

      return rooms;
    };

    setOptimizedSchedule(optimizeSchedule(schedule));
  }, [schedule]);

  const renderSchedule = () => {
    return Object.keys(optimizedSchedule).map((room) => (
      <div key={room} className="mt-8 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">{room}</h2>
        {optimizedSchedule[room].map((appointment, index) => (
          <div key={index} className="mb-4">
            <p className="text-gray-700"><strong>Patient Name:</strong> {appointment.patientName}</p>
            <p className="text-gray-700"><strong>Original Appointment Time:</strong> {appointment.appointmentTime}</p>
            <p className="text-gray-700"><strong>Optimized Appointment Time:</strong> {appointment.optimizedTime}</p>
            <p className="text-gray-700"><strong>Urgency:</strong> {appointment.urgency}</p>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">Schedule Optimization</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Appointment Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Urgency:</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-center  text-indigo-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Optimize Schedule
        </button>
      </form>

      <div className="flex flex-wrap justify-center">
        {renderSchedule()}
      </div>
    </div>
  );
};

export default Schedule;

