<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{

    public function indexByUser(Request $request)
    {

        $user = $request->user();

        $tasks = $user->tasks()->get();

        return $tasks;

    }

    public function store(Request $request)
    {

        try {

            $task = new Task();

            $task->name = $request->name;

            $task->type = $request->type;

            if ($request->filled('father_id')) {

                $fatherTask = Task::findOrFail($request->father_id);

                $task->parentTask()->associate($fatherTask);

            }

            $task->user()->associate($request->user());

            $task->save();

            return response()->json($task, 201);

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

    public function show(int $taskId)
    {

        try {

            $task = Task::findOrFail($taskId);

            return $task;

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Task not found'
            ], Response::HTTP_NOT_FOUND);

        }

    }

    public function update(Request $request, int $taskId)
    {

        try {

            $task = Task::findOrFail($taskId);

            if ($request->filled('name')){

                $task->name = $request->name;

            }

            if ($request->filled('type')){

                $task->type = $request->type;

            }

            if ($request->filled('father_id')){

                $fatherTask = Task::findOrFail($request->father_id);

                $task->parentTask()->associate($fatherTask);

            }

            $task->save();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' => 'Some error has occurred'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

        }
    }

    public function destroy(int $taskId)
    {

        try {

            $task = Task::findOrFail($taskId);

            $task->delete();

            return response()->noContent();

        } catch (Exception $e) {

            return response()->json([
                'message' =>  'Error in delete operation'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

        }

    }

}
