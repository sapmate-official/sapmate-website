import React, {  useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Globe,
  Filter,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const ScheduleSection = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('IST');
  const [selectedTime, setSelectedTime] = useState('all');

  const batches = [
    {
      id: 1,
      startDate: 'January 15, 2025',
      schedule: 'Mon, Wed, Fri',
      time: '7:00 PM - 9:00 PM IST',
      timeSlot: 'evening',
      instructor: 'Sarah Anderson',
      seatsTotal: 10,
      seatsAvailable: 3,
      status: 'Filling Fast',
      timezone: 'IST'
    },
    {
      id: 2,
      startDate: 'January 20, 2025',
      schedule: 'Tue, Thu, Sat',
      time: '8:00 AM - 10:00 AM EST',
      timeSlot: 'morning',
      instructor: 'Michael Chen',
      seatsTotal: 10,
      seatsAvailable: 5,
      status: 'Open',
      timezone: 'EST'
    },
    {
      id: 3,
      startDate: 'February 1, 2025',
      schedule: 'Mon, Wed, Fri',
      time: '10:00 AM - 12:00 PM IST',
      timeSlot: 'morning',
      instructor: 'Sarah Anderson',
      seatsTotal: 10,
      seatsAvailable: 8,
      status: 'Open',
      timezone: 'IST'
    },
    {
      id: 4,
      startDate: 'February 5, 2025',
      schedule: 'Tue, Thu, Sat',
      time: '6:00 PM - 8:00 PM GMT',
      timeSlot: 'evening',
      instructor: 'David Wilson',
      seatsTotal: 10,
      seatsAvailable: 2,
      status: 'Almost Full',
      timezone: 'GMT'
    }
  ];

  const timeZones = [
    { label: 'IST (UTC+5:30)', value: 'IST' },
    { label: 'EST (UTC-5:00)', value: 'EST' },
    { label: 'GMT (UTC+0:00)', value: 'GMT' }
  ];

  const timeSlots = [
    { label: 'All Times', value: 'all' },
    { label: 'Morning', value: 'morning' },
    { label: 'Evening', value: 'evening' }
  ];

  const filteredBatches = batches.filter(batch => {
    if (selectedTimeZone !== 'all' && batch.timezone !== selectedTimeZone) return false;
    if (selectedTime !== 'all' && batch.timeSlot !== selectedTime) return false;
    return true;
  });
  const router = useRouter()

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upcoming Batches
          </h2>
          <p className="text-lg text-gray-600">
            Choose a convenient batch that fits your schedule
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <span>Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedTimeZone}
                  onChange={(e) => setSelectedTimeZone(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {timeZones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Batch Cards */}
        <div className="grid gap-6">
          {filteredBatches.map((batch) => (
            <Card 
              key={batch.id}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  {/* Batch Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Batch #{batch.id}
                      </h3>
                      <Badge className={`
                        ${batch.seatsAvailable <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}
                      `}>
                        {batch.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600">Start Date</div>
                          <div className="font-medium">{batch.startDate}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600">Schedule</div>
                          <div className="font-medium">{batch.schedule}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600">Timing</div>
                          <div className="font-medium">{batch.time}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="text-sm text-gray-600">Seats Left</div>
                          <div className="font-medium">
                            {batch.seatsAvailable} of {batch.seatsTotal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center">
                    <button onClick={()=>router.push("/contact-us")} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <span>Enroll Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Batch Information */}
        <Card className="mt-8 border-none shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Small Batch Size
                  </h4>
                  <p className="text-sm text-gray-600">
                    Maximum 10 students per batch for personalized attention
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Flexible Timings
                  </h4>
                  <p className="text-sm text-gray-600">
                    Multiple batches across time zones for your convenience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    12 Weeks Duration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive training with hands-on projects
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export {ScheduleSection};