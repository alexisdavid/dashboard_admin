<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Models\MenusModel;
use Illuminate\Http\Request;

class MenusModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menus = MenusModel::all();
        foreach ($menus as $menu){
            $menu->submenusList = MenusModel::find($menu->id)->submenus;
        }
        return response()->json(['menus'=>$menus],200);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MenusModel  $menusModel
     * @return \Illuminate\Http\Response
     */
    public function show(MenusModel $menusModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MenusModel  $menusModel
     * @return \Illuminate\Http\Response
     */
    public function edit(MenusModel $menusModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MenusModel  $menusModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MenusModel $menusModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MenusModel  $menusModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(MenusModel $menusModel)
    {
        //
    }
}
