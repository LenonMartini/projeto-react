import React, { useState, useEffect } from "react";
import { 
    CButton, 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CRow,
    CDataTable, 
    CButtonGroup
} from '@coreui/react';
import CIcon from "@coreui/icons-react";

import useApi from '../../../services/api';
import { Link, useParams } from "react-router-dom";


export default () => {
    const api = useApi();
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const fields = [

        {label: 'Razão Social', key:'social_reason'},
        {label: 'Abreviação', key:'abbreviated'},
        {label: 'CNPJ', key:'cnpj'},
        {label: 'Status', key:'status'},
        {label: 'Ações', key:'actions'}

    ];
    const id  = useParams();



    useEffect(() => {

        getList();

    }, []);


    const getList = async () => {
        setLoading(true);
        const result = await api.getCompanies();
        setLoading(false);

        if(result.error === ''){
            setList(result.list);
        }else{
            alert(result.error);
        }
    }

    return (
       
        <CRow>
            <CCol>
                <h2>Empresas</h2>
                <hr/>

                <CCard>
                    <CCardHeader>
                        <CButton color="primary">
                            <CIcon name="cil-check" /> Novo
                        </CButton>
                    </CCardHeader>
                    <CCardBody>
                       <CDataTable 
                            items={list}
                            fields={fields}
                            loading={loading}
                            noItemsViewSlot=" "
                            hover
                            striped
                            bordered
                            pagination
                            itemsPerPage={5}
                            scopedSlots={{
                                'actions': (item, index)=>(
                                    <td>
                                        <CButtonGroup>
                                            <CButton color="info">
                                                 Visualizar
                                            </CButton>
                                            
                                            <Link to={"/company/edit" + list[index]['id']}>
                                                <CButton color="secondary">
                                                    Editar
                                                </CButton>
                                            </Link>  
                                            <CButton color="danger">Deletar</CButton>
                                        </CButtonGroup>
                                    </td>
                                )
                            }}
                       />
                    </CCardBody>
                </CCard>

            
            </CCol>
        </CRow>
    );
}