import React, { useState,useEffect } from 'react';
import styles from "styles/Login.module.css";
import { Form, Input, message, ConfigProvider } from "antd";
import { useNavigate,Link,  } from "react-router-dom";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { loginAPI } from 'services/api/auth';
import { getCookie, setCookie } from 'services/session/cookies';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const Login = () => {
      const navigate = useNavigate();
      const [previousURL, setPreviousURL] = useState("");
      const [errorMsg, setErrorMsg] = useState("");
      const [messageApi, contextHolder] = message.useMessage();
      
      const success = () => {
        messageApi.destroy();
        messageApi
          .open({
            type: 'success',
            content: 'Successfully Login.',
            duration: 2.5,
            style: {
              marginTop: '40vh',
            },
          })
          .then(() => {
          navigate("/");
          }
          );
      };
      const Loading = () => {
        messageApi
          .open({
            type: 'loading',
            content: 'Processing..',
            duration: 4.5,
            style: {
              marginTop: '40vh',
            },
          })
      };
      
      const warning = (resMssage) => {
        messageApi.open({
          type: 'warning',
          content: resMssage,
          duration: 2.5,
        });
      };

      useEffect(() => {
        if(getCookie('token')){
          return navigate('/')
        }
        setPreviousURL(document.referrer);
        }, []);

    
      const handleSubmission = async (values) => {
        try {
          if (!values.email || !values.password) {
            setErrorMsg("Fill all fields");
            return;
          }
          setErrorMsg("");
          const { data, isError, message } = await loginAPI(
            REQUEST_TYPES.POST,
            ENDPOINTS.LOGIN,
            values
          );
          if(isError){
            warning(message);
          return  setErrorMsg(message);
          }
          if (!isError && data) {
            const {token} = data || {};
            setCookie('token', token);
            success();
            // navigate("/");
          }
        } catch (error) {
          console.log(error.message);
        }
      };


      const onFinish = (values) => {
        Loading();
        handleSubmission(values);
      };
      
      const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
      };
    
  return (
    <>
        <ConfigProvider
        theme={{
          token: {
            /* here is your global tokens */
            colorPrimary: '#27ae60',
            colorPrimaryHover: '#27ae60',
            colorSplit: '#B6E4C8',
          },
          components:{
            Form:{
              labelRequiredMarkColor: 'rgba(0, 0, 0, 0.88)',
            },

          },
        }}
      >
        
        <div className={styles.container}>
          
        <h1 className={styles.heading} style={{ marginBottom:"40px", fontSize:"40px"}}>Welcome to</h1>
        <h1 className={styles.heading} style={{color:"#27ae60", marginBottom:"40px", fontSize:"24px"}}>Pakistan Minerals Information & Services Portal</h1>

        <div className={styles.innerBox}>
          {/*<Toaster toastOptions={{ duration: 4000 }} />*/}

          <h3 className={styles.heading} style={{color:"#27ae60"}}>Login</h3>
          <Form
            layout='vertical'
            variant="outlined"
            style={
              {
                //maxWidth: 600,
              }
            }

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
          <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter correct email",
                },
                {
                  type: 'email',
                },
              ]}
            >
              
          {/*<label>Email</label>*/}
          <Input
            label="email"
            className={styles.inPut}
            placeholder="abc@example.com"
            variant="filled"
          />
          </Form.Item>
          <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  type: "password",
                },
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
            >
            <Input.Password
              label="password"
              className={styles.inPut}
              placeholder="Password"
              variant="filled"
              type='password'

            />
          </Form.Item>
          <p style={{textAlign: 'right'}}>
                    
                    <span>
                        <Link className={styles.loginlink} to="/forgotpassword" >Forgot Password?</Link>
                    </span>
          </p>
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button
                        type="primary"
                        style={{width:"100%"}}
                        shape="round"
                        size="large"
                        htmltype="submit"
                      >
                        Login
                       
                      </button>
                      
       
            
            <p>
                    Don't have an account?{" "}
                    <span>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
          </div>
          {contextHolder}
          </Form>
        </div>
        
      </div>
      </ConfigProvider>
    </>
  );
}

export default Login;