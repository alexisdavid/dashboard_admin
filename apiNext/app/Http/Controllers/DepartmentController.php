<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Groups;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departments = Department::paginate(10);
        foreach ($departments as $department){
            $department->groupsList = Department::find($department->id)->groups;
        }
        return response()->json(['data'=>$departments],200);
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
        $data = [ 'departmentName' => $request->departmentName, 'active' => 1 ];
        $groups= $request->groups;
        $validator = Validator::make($data, [  'departmentName' => 'required |min:5' ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
          return response()->json(['success' => false, 'error' => $errors], 200);
        }else{
            $department=new Department($data);
            $department->save();

            if ($department->id>0 ) {
                foreach ($groups as $item) {
                    $group = new Groups();
                    $group->department_id=$department->id;
                    $group->descriptions=$item['descriptions'];
                    $group->active=$item['active'];
                    $group->save();
                }
            }
            return response()->json([ 'success' => true,'message' => 'Successfully created department!'], 201);
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        $data = [ 'departmentName' => $request->departmentName, 'active' => 1,'id' => $request->id];
        $groups= $request->groups;
        $validator = Validator::make($data, [  'departmentName' => 'required |min:5' ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
          return response()->json(['success' => false, 'error' => $errors], 200);
        }else{

            
            $department=Department::find($data['id'])->update(['departmentName'=>$data['departmentName'],'active'=>$data['active']]);
            $groups=Groups::where('department_id','=',$data['id'] )->delete();
           
            $groups= $request->groups;
            if ($data['id']>0 ) {
                foreach ($groups as $item) {
                    $group = new Groups();
                    $group->department_id=$data['id'];
                    $group->descriptions=$item['descriptions'];
                    $group->active=$item['active'];
                    $group->save();
                }
            }
            return response()->json([ 'success' => true,'message' => 'Successfully created department!'], 201);
        } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        //
    }
}
