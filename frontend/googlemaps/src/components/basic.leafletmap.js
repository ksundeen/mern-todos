import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class BasicLeafletMap extends Component {

    constructor(props) {
        super(props)

        this.locationMarker = this.locationMarker.bind(this);

        this.state = {
            position: null,
            setPosition: null
        }
    }

    locationMarker() {
        const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
        })
  
        return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
        )
    }
  
  render() {
      return (
        <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <LocationMarker />
        </MapContainer>
        )
    }
};