<?php

namespace App\Model\Cheersadmin;

use Illuminate\Database\Eloquent\Model;

class Plugin extends Model
{
    //

	protected $primaryKey = 'plugin_id';
    protected $table = 'cheersadmin_plugins';
	public $timestamps = false;
    protected $fillable = ['plugin_id','plugin_name', 'plugin_price', 'plugin_status', 'plugin_created_at', 'plugin_updated_at'];
}
