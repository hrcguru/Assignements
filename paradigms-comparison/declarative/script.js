// Declarative approach - we describe WHAT we want, not HOW to achieve it

// Functional component that declares what the UI should look like
function HelloWorld() {
    const [color, setColor] = React.useState('blue');
    
    // Declarative style object
    const paragraphStyle = {
        color: color,
        fontSize: '24px',
        textAlign: 'center',
        marginTop: '50px',
        cursor: 'pointer'
    };
    
    // Declarative event handler
    const handleClick = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };
    
    // Declarative JSX - we describe the desired output
    return React.createElement(
        'p',
        {
            style: paragraphStyle,
            onClick: handleClick
        },
        'Hello, World!'
    );
}

// Render the component to the DOM
ReactDOM.render(
    React.createElement(HelloWorld),
    document.getElementById('root')
);