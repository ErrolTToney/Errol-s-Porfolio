import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(()=>({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #6622cc, #A755c2)'
    },
    header: {
        color: '#1B1725',
    },
    image: {
        marginLeft: '15px',
    },
    image_Two: {
        display:'flex',
        borderRadius: '180px',
        
    }
}));