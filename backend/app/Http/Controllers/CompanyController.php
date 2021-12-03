<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Company;

class CompanyController extends Controller{
    


    public function getAll(){

        $array = ['error' => '', 'list' => []];

        $user = auth()->user();
        $companies = Company::select()
                                ->join('locations', 'locations.id', '=', 'companies.location_id')
                                ->get();
        $array['list'] = $companies;
 
        return $array;
    }

}
