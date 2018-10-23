<?php

namespace App\Model\Cheersadmin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use DB;
class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'cheersadmin_users';
    protected $primaryKey = 'user_id';
    protected $remember_token = 'remember_token';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','user_name', 'user_email', 'user_password','remember_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id','user_password', 'user_token','remember_token',
    ];


    public static  function updateData($userId,$arrayUpdate)
    {
       DB::table('cheersadmin_users')->where('user_id',$userId)->update($arrayUpdate); 
    }

}
