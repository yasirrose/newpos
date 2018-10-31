<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use Session;
use DB;
class UserController extends Controller 
{
public $successStatus = 200;
/** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    
    public function login(Request $request){ 
        if($request->remember == true)
        {
            $remember = $request->remember;
        }else{
            $remember = false;
        }

        if(Auth::attempt(['email' => request('email'), 'password' => request('password')],$remember)){ 
            $user = Auth::user(); 
            return response()->json(['message' => 'success',  'auth_user' => Auth::user()], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised','message' => 'Email or Password fail']); 
        } 
    }


    public function isloggedin(Request $request){ 

        $session_user_id = Auth::user()->id; 

       
        if($session_user_id !== NULL){
             return response()->json(['message' => 'success']); 
        }else{ 
            return response()->json(['error'=>'Unauthorised','message' => 'Not Logged In']); 
        } 
    }


    public function user_pin(Request $request){ 

        $session_user_id = Auth::user()->id;
        if (User::where('user_pin', '=', request('user_pin'))->where('id', '=', $session_user_id)->exists()) {

            return response()->json(['message' => 'success'], $this-> successStatus); 
        }
        else{ 
            return response()->json(['error'=>'Unauthorised','message' => 'PIN fail']); 
        } 
    }
/** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
$input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')-> accessToken; 
        $success['name'] =  $user->name;
return response()->json(['success'=>$success], $this-> successStatus); 
    }
/** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        dd(1);
        //return response()->json(['success' => $user], $this-> successStatus); 
    } 
}