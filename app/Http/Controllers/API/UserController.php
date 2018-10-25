<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\Model\Cheersadmin\User; 
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

        if(Auth::attempt(['user_email' => request('email'), 'password' => request('password')],$remember)){ 
            $user = Auth::user(); 
            if($user != "" || $user != null)
            {
                $userID = $user->user_id;
            }else
            {
                $userID = 0;
            }
            //$success['token'] =  $user->createToken('Laravel Password Grant Client')-> accessToken; 
            $tokenResult = $user->createToken('Personal Access Token');
            dd($tokenResult);
            $success['token'] = $tokenResult->accessToken;
            Session()->put('token', $success['token']);
            Session()->put('userId', $userID);
            $updateToken['user_token'] =  $success['token'];
            User::updateData($userID,$updateToken);

            if($remember == true)
            {
                $updateQuery['user_remember_token'] = 'Yes';
                User::updateData($userID,$updateQuery);
            }

            return response()->json(['success' => $success,'token' =>$success['token'],'message' => 'success'], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised','message' => 'Email or Password fail']); 
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