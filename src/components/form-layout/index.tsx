import styled from "styled-components";

export const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 16 },
};
export const tailLayout = {
    wrapperCol: { offset: 12, span: 16 },
};

export const FormStyle = styled.div`
.ant-form-item-label label{
    margin-right: 1em;
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    min-width: 100%;
}

.right .ant-form-item-control-input-content{
  text-align: right;
}
`
