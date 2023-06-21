export const CodeLines = () => {
  return (
    <div className="codeLines">
      <pre className="codeLines__row codeLines__row--1" datatype="JS">
        <code>
          .<span className="keyword">from</span>(<span className="className">".circle"</span>
          {`, {`} rotate<span className="symbol">: -</span>
          <span className="value">360</span>,
          <span className="variable">
            {" "}
            transformOrigin<span className="symbol">: </span>
          </span>
          <span className="value">"50% 50%"</span>, duration<span className="symbol">:</span>
          <span className="value"> 0.7</span>, opacity<span className="symbol">:</span>
          <span className="value"> 0 </span>
          {`})`}
        </code>
      </pre>
      <pre className="codeLines__row codeLines__row--2" datatype="JS">
        <code>
          .<span className="keyword">from</span>(<span className="className">".triangle"</span>
          {`, {`} duration<span className="symbol">:</span>
          <span className="value"> 0.4</span>, x<span className="symbol">:</span> <span className="value">20</span>, y:
          -<span className="value">10</span>, opacity<span className="symbol">:</span> <span className="value">0</span>
          {` })`}
        </code>
        <code>
          .<span className="keyword">from</span>(<span className="className">".live"</span>
          {`, {`} duration<span className="symbol">:</span> <span className="value">0.5</span>, x
          <span className="symbol">: -</span>
          <span className="value">15</span>, opacity<span className="symbol">:</span> <span className="value">0</span>{" "}
          {`},`} <span className="className">{`"<"`}</span>
          {`)`}
        </code>
      </pre>
      <pre className="codeLines__row codeLines__row--3" datatype="JS">
        <code>
          .<span className="keyword">from</span>(<span className="className">".sport"</span>
          {`, {`} duration<span className="symbol">:</span> <span className="value">0.5</span>, x
          <span className="symbol">: -</span>
          <span className="value">10</span>, opacity<span className="symbol">:</span> <span className="value">0</span>
          {` })`}
        </code>
      </pre>
    </div>
  )
}
