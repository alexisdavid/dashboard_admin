<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;
    public function groups()
    {
        return $this->hasMany('App\Models\Groups');
    }
    protected $fillable = [
        'departmentName',
        'active'
    
    ];
}
