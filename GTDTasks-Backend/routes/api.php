<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TicklerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    // Inicio de la API. Hola :)
    return $request->user();
});

/**
 * TASKS
 */

Route::middleware(['auth'])->get('/tasks', [TaskController::class, 'indexByUser']);

Route::middleware(['auth'])->get('/tasks/{taskId}', [TaskController::class, 'show']);

Route::middleware(['auth'])->post('/tasks', [TaskController::class, 'store']);

Route::middleware(['auth'])->put('/tasks/{taskId}', [TaskController::class, 'update']);

Route::middleware(['auth'])->delete('/tasks/{taskId}', [TaskController::class, 'destroy']);

/**
 * APPOINMENTS
 */

Route::middleware(['auth'])->get('/appointments', [AppointmentController::class, 'indexByUser']);

Route::middleware(['auth'])->get('/appointments/{appointmentId}', [AppointmentController::class, 'show']);

Route::middleware(['auth'])->post('/appointments', [AppointmentController::class, 'store']);

Route::middleware(['auth'])->put('/appointments/{appointmentId}', [AppointmentController::class, 'update']);

Route::middleware(['auth'])->delete('/appointments/{appointmentId}', [AppointmentController::class, 'destroy']);

/**
 * Tickler
 */

 Route::middleware(['auth'])->get('/ticklers', [TicklerController::class, 'indexByUser']);

 Route::middleware(['auth'])->get('/ticklers/{ticklerId}', [TicklerController::class, 'show']);
 
 Route::middleware(['auth'])->post('/ticklers', [TicklerController::class, 'store']);
 
 Route::middleware(['auth'])->put('/ticklers/{ticklerId}', [TicklerController::class, 'update']);
 
 Route::middleware(['auth'])->delete('/ticklers/{ticklerId}', [TicklerController::class, 'destroy']);