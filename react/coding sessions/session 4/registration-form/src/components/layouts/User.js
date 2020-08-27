import React,{ Component} from 'react'

class User extends Component {
    state = {
        detail: false
    }

    handleView = () => {
        this.setState({
            detail: !this.state.detail
        })
    }

    render(){
        // console.log(this.state.detail)
        const { user } = this.props
        // console.log('user:', user)

        return (
            <div style={styles.container}>
                <div style={styles.title}>
                <p>{user.firstName} {user.position}</p>
                <button onClick={this.handleView}>{this.state.detail ?'hide' : 'view'}</button>
                </div>
            {this.state.detail ?
                <table>
                    <tr>
                        <td>firstName: </td>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <td>lasstName: </td>
                        <td>{user.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email ID: </td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Contact No.: </td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Position: </td>
                        <td>{user.position}</td>
                    </tr>
                </table>
                :
                null
            }
            </div>
        )
    }
    
    
}


const styles = {
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        border:'1px solid darkgreen',
        borderRadius:'10px',
        magin:'10px auto',
        padding:'15px',
        maxWidth:'400px',
    },
    title:{
        display:'flex',
        justifyContent:'space-between',

    }
}

export default User
