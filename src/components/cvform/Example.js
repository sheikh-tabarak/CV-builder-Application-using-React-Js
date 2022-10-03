
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import Template from '../templates/template1/template1';
import {ComponentToPrint} from './ComponentToPrint'

export default function Example() {
    const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      
      <ComponentToPrint test="This is test" ref={componentRef} />
    </div>
  )
}

