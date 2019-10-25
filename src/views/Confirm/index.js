import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Confirm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='confirm'>
                <div className='confirm__msg'>{ this.props.msg }</div>
                <div className='confirm__btn'>
                    <span onClick={this.sureClick.bind(this)}>确定</span>
                    <span onClick={this.cancelClick.bind(this)}>取消</span>
                </div>
            </div>
        )
    }

    sureClick() {
        this.props.onOk()
        this.removeSelf()

    }

    cancelClick() {
        this.props.onCancel()
        this.removeSelf()
    }

    removeSelf() {
        ReactDOM.unmountComponentAtNode(node)
        document.body.removeChild(node)
    }
}
const node = document.createElement('div')
const confirm = (msg, onOk, onCancel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const node = document.createElement('div')
            document.body.appendChild(node)
            const res = ReactDOM.render(<Confirm msg={msg} onOk={onOk} onCancel={onCancel}/>, node)
            resolve(res)
        },2000)
    })
}

class ConfirmApp extends React.Component{
    render() {
        return (
            <div></div>
        )
    }

    async componentDidMount() {
        const res = await confirm('确定此操作吗?',() => console.log('ok'), () => console.log('cancel'))
        if (res) {
            console.log('是')
        } else {
            console.log('否')
        }
    }
}


export default ConfirmApp;

