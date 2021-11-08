<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use  App\Models\User;
use Illuminate\Support\Facades\Log;
class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::select('users.userCode as codigo','users.name as nombre','users.email as email','users.department as dpto',
                            'users.created_at as fecha', 
                            'users.id',   
                            'users.userName', 
                            'users.userGroup', 
                            'users.superUser', 
                            'users.active', 
                            'users.image',  
                            // 'departments.departmentName',
                            // 'departments.id',
                            // 'groups.descriptions',
                            // 'groups.id as group_id'
                            )
        // ->join('departments','users.department','=','departments.id')
        // ->join('groups','users.userGroup','=','groups.id')
        ->orderBy('users.created_at','desc')
        ->paginate(10);
Log::info($users);
        return response()->json(['data'=>$users],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
      
        $validator = Validator::make($data, [
            'password' => 'required |min:8',
            'userCode' => 'required|unique:users|max:25',
            'userName' => 'required|max:100',
            'userGroup' => 'required|int|min:1',
            'superUser' => 'required|int',
            'email' =>      'required|max:100|email',
            'department' => 'required|int',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();

            return response()->json(['success' => false, 'error' => $errors], 200);

        } else {
            $data['password'] = bcrypt($data['password']);
            $user=new User($data);
            $user->save();
            return response()->json([ 'success' => true,'message' => 'Successfully created user!'], 201);
        }

        

    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       



        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
