<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
/**
* Handle an incoming request.
*
* @param \Illuminate\Http\Request $request
* @param \Closure $next
* @return mixed
*/

public function handle($request, Closure $next, $guard = null)
{
/*	&& Auth::user()->admin==1*/
if (Auth::guard($guard)->check() ) {
return $next($request);

}
return redirect('/');

}


}