<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\TaskController;
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