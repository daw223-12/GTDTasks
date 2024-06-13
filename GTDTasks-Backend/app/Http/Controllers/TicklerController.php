<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tickler;
use Carbon\Carbon;
use Exception;
use Symfony\Component\HttpFoundation\Response;

class TicklerController extends Controller
{
    public function indexByUser(Request $request)
    {

        try {

            $user = $request->user();

            $ticklers = $user->ticklers()->get();

            return $ticklers;

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Tickler endpoint failed'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

    public function show(int $ticklerId)
    {

        try {

            $tickler = Tickler::findOrFail($ticklerId);

            return $tickler;

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Tickler not found'
            ], Response::HTTP_NOT_FOUND);

        }


    }

    public function store(Request $request)
    {

        try {

            $tickler = new Tickler();

            $tickler->name = $request->name;

            // aaaa-mm-dd hh:mm:ss

            $tickler->date = Carbon::parse($request->date);


            $tickler->user()->associate($request->user());

            $tickler->save();

            return response()->json($tickler, 201);

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_BAD_REQUEST);

        }

    }

    public function update(int $ticklerId, Request $request)
    {

        try {

            $tickler = Tickler::findOrFail($ticklerId);

            if ($request->filled('name')){

                $tickler->name = $request->name;

            }

            if ($request->filled('date')){

                $tickler->date = Carbon::parse($request->date);

            }



            $tickler->save();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_BAD_REQUEST);

        }

    }

    public function destroy(int $ticklerId)
    {

        try {

            $tickler = Tickler::findOrFail($ticklerId);

            $tickler->delete();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Error in delete operation'
            ], Response::HTTP_BAD_REQUEST);

        }

    }
}
