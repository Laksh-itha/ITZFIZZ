
const SKIN = '#c68e6b'
export default function Steve() {
  return (
    <svg viewBox="0 0 8 32" className="block h-full w-auto" shapeRendering="crispEdges" aria-label="Minecraft character walking">
     
      <g className="arm-back">
        <rect x="2" y="8" width="4" height="4" fill="#127f7f" />
        <rect x="2" y="12" width="4" height="8" fill="#9a6b4b" />
      </g>
      <g className="leg-back">
        <rect x="2" y="20" width="4" height="10" fill="#2a2a6e" />
        <rect x="2" y="30" width="4" height="2" fill="#4a4a4a" />
      </g>
   
      <rect x="2" y="8" width="4" height="12" fill="#1ea7a7" />
      <rect x="2" y="17" width="4" height="3" fill="#178d8d" />
    
      <g className="leg-front">
        <rect x="2" y="20" width="4" height="10" fill="#3c3c8c" />
        <rect x="2" y="26" width="4" height="1" fill="#34347c" />
        <rect x="2" y="30" width="4" height="2" fill="#6b6b6b" />
      </g>
      <g className="arm-front">
        <rect x="2" y="8" width="4" height="4" fill="#1ea7a7" />
        <rect x="2" y="12" width="4" height="8" fill={SKIN} />
        <rect x="2" y="18" width="4" height="2" fill="#b57d5c" />
      </g>
      {/* head */}
      <rect x="0" y="0" width="8" height="8" fill={SKIN} />
      <rect x="0" y="0" width="8" height="2" fill="#4a3321" />
      <rect x="0" y="2" width="3" height="3" fill="#4a3321" />
      <rect x="5" y="4" width="1" height="1" fill="#ffffff" />
      <rect x="6" y="4" width="1" height="1" fill="#4b3fa6" />
      <rect x="6" y="6" width="2" height="1" fill="#8a5a3c" />
    </svg>
  )
}
