<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'type',
        'father_id',
        'user_id'
    ];


    public function parentTask()
    {
        return $this->belongsTo(Task::class, 'father_id');
    }

    public function subtasks()
    {
        return $this->hasMany(Task::class, 'father_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
