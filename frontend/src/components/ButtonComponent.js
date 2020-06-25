import React from 'react';
import Box from '@material-ui/core/Box';

function ButtonComponent() {
    return (
        <Box style={{ display: 'flex', flexDirection: 'row'}}>
            <Box>
                <button>button 1 on top</button>
            </Box>
            <button>Click me! Im sick</button>
        </Box>
    );
};

export default ButtonComponent;