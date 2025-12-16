"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  classBookingsData,
  type ClassBooking,
  type ClassBookingStatus,
} from "@/lib/admin-data";
import { formatPrice, cn } from "@/lib/utils";
import { BookOpen, Calendar, Users, Mail, Phone } from "lucide-react";

const statusColors: Record<ClassBookingStatus, string> = {
  registered: "bg-gray-100 text-gray-700",
  confirmed: "bg-green-100 text-green-700",
  attended: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700",
};

export function ClassBookingsSection() {
  const [bookings] = useState<ClassBooking[]>(classBookingsData);

  const groupedBookings = bookings.reduce(
    (acc, booking) => {
      const key = `${booking.workshopTitle}-${booking.workshopDate}`;
      if (!acc[key]) {
        acc[key] = {
          workshopTitle: booking.workshopTitle,
          workshopDate: booking.workshopDate,
          workshopTime: booking.workshopTime,
          workshopPrice: booking.workshopPrice,
          bookings: [],
        };
      }
      acc[key].bookings.push(booking);
      return acc;
    },
    {} as Record<
      string,
      {
        workshopTitle: string;
        workshopDate: string;
        workshopTime: string;
        workshopPrice: number;
        bookings: ClassBooking[];
      }
    >
  );

  const sortedWorkshops = Object.values(groupedBookings).sort(
    (a, b) => new Date(a.workshopDate).getTime() - new Date(b.workshopDate).getTime()
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Class Bookings</h2>
        <p className="text-sm text-gray-600">
          Manage workshop registrations and participants
        </p>
      </div>

      <div className="space-y-6">
        {sortedWorkshops.map((workshop) => {
          const activeBookings = workshop.bookings.filter(
            (b) => b.status !== "cancelled"
          );
          const totalParticipants = activeBookings.reduce(
            (sum, b) => sum + b.numberOfGuests,
            0
          );
          const totalRevenue = activeBookings.reduce(
            (sum, b) => sum + b.totalPrice,
            0
          );

          return (
            <Card key={`${workshop.workshopTitle}-${workshop.workshopDate}`} className="border-none shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {workshop.workshopTitle}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(workshop.workshopDate).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                        <span>•</span>
                        <span>{workshop.workshopTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">
                        {totalParticipants}
                      </div>
                      <div className="text-xs text-gray-500">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">
                        {formatPrice(totalRevenue)}
                      </div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm text-gray-600">
                        <th className="pb-2 pr-4 font-medium">Participant</th>
                        <th className="pb-2 pr-4 font-medium">Contact</th>
                        <th className="pb-2 pr-4 font-medium">Guests</th>
                        <th className="pb-2 pr-4 font-medium">Total</th>
                        <th className="pb-2 pr-4 font-medium">Status</th>
                        <th className="pb-2 font-medium">Registered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {workshop.bookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className={cn(
                            "text-sm",
                            booking.status === "cancelled" && "bg-gray-50 opacity-60"
                          )}
                        >
                          <td className="py-3 pr-4">
                            <div className="font-medium text-gray-900">
                              {booking.participantName}
                            </div>
                          </td>
                          <td className="py-3 pr-4">
                            <div className="flex flex-col gap-1 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {booking.participantEmail}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {booking.participantPhone}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 pr-4">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span>{booking.numberOfGuests}</span>
                            </div>
                          </td>
                          <td className="py-3 pr-4 font-medium text-gray-900">
                            {formatPrice(booking.totalPrice)}
                          </td>
                          <td className="py-3 pr-4">
                            <span
                              className={cn(
                                "inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize",
                                statusColors[booking.status]
                              )}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-3 text-gray-500">
                            {new Date(booking.registeredAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {sortedWorkshops.length === 0 && (
        <Card className="border-none shadow-sm">
          <CardContent className="py-8 text-center text-gray-500">
            No class bookings at the moment.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
