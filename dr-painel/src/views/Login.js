import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import  useApi  from '../services/api'
import { useHistory }from 'react-router-dom'


const Login = () => {
  const api = useApi();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLoginButton = async () => {
    if(email && password){
        setLoading(true);
          const result = await api.login(email, password);
          if(result.error === ''){
            localStorage.setItem('token', result.token);
            history.push('/');
          }else{
            setError(result.error);
    
          }
        setLoading(false);
    }else{

      setError('Digite os daddos de acesso!!!');

    }
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center bg-dark">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    {!loading &&
                      <h1>Login</h1>
                    }
                    {loading && 
                      <div>
                       
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...
                        
                      </div>
                    }
                    
                    <p className="text-muted">Acesse com sua Conta</p>
                    {error !== '' &&
                      <CAlert color="danger">{error}</CAlert>
                    }
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} disabled={loading}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} disabled={loading}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleLoginButton} disabled={loading}>
                          { loading ? 'Carregando' : 'Acessar' }
                        </CButton>
                      </CCol>
                      {/*<CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>*/}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/*
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>*/}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
