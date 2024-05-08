<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AppointmentController extends Controller
{

    public function indexByUser(Request $request)
    {

        try {

            $user = $request->user();

            $appointments = $user->appointments()->get();

            return $appointments;

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Appointments endpoint failed'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

    public function show(int $appointmentId)
    {

        try {

            $appointment = Appointment::findOrFail($appointmentId);

            return $appointment;

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Appointment not found'
            ], Response::HTTP_NOT_FOUND);

        }


    }

    public function store(Request $request)
    {

        try {

            $appointment = new Appointment();

            $appointment->name = $request->name;

            // aaaa-mm-dd hh:mm:ss

            $appointment->date = Carbon::parse($request->date);

            if ($request->filled('recurrence')){

                $appointment->recurrence = $request->recurrence;

            }

            if ($request->filled('duration')){

                $appointment->duration = $request->duration;

            }

            $appointment->user()->associate($request->user());

            $appointment->save();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_BAD_REQUEST);

        }

    }

    public function update(int $appointmentId, Request $request)
    {

        try {

            $appointment = Appointment::findOrFail($appointmentId);

            if ($request->filled('name')){

                $appointment->name = $request->name;

            }

            if ($request->filled('date')){

                $appointment->date = Carbon::parse($request->date);

            }

            if ($request->filled('recurrence')){

                $appointment->recurrence = $request->recurrence;

            }

            if ($request->filled('duration')){

                $appointment->duration = $request->duration;

            }


            $appointment->save();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_BAD_REQUEST);

        }

    }

    public function destroy(int $appointmentId)
    {

        try {

            $appointment = Appointment::findOrFail($appointmentId);

            $appointment->delete();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Error in delete operation'
            ], Response::HTTP_BAD_REQUEST);

        }

    }

}
