import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import Admin from './AdminDummys';
import dot from '../../Graphics/icons/circle.png'
import * as Styles from './MapStyle';

//hård kodade barer som pushas up till Firebase, ifall barer är tomt.
const barArray =[
  {
    position: [59.316659403640784, 18.033692836761475], 
    name: 'Hornhuset',
    admin: "18RDRcd5zOX7ThN1dMX1D5j4bX23",
    bioText:"Hos oss serveras mat sju dagar i veckan, både luncher och middagar. Vår avslappnade och färgstarka lokal är den perfekta mötesplatsen för allt från en AW med kollegorna till middag med kompisgänget!  På fredagar & lördagar förvandlar vi även lokalen till en spännande del av vårt nöjeshus där vi har öppet sent på natten med musik, dans & nyskapande cocktails."
  },
  {
    position: [59.3247235, 18.0738668], 
    name: 'Bistro & Grill Ruby',
    admin: "q9SQ2vj32CdN8v6QBrE5OUDR3Jp1",
    bioText:"Hos oss på Bistro & Grill Ruby erbjuder vi det bästa av två världar. I vår bistro så bjuder vi på både rätter och atmosfär från Paris, och på Grill Ruby frestar vi med Texas-inspirerade rätter från vår kolgrill.  Välkommen till Bistro & Grill Ruby på Österlånggatan 14 i Gamla Stan!"
  },
  {
    position: [59.3139639, 18.1057867], 
    name: 'Boule & Berså',
    admin: "ULfvAiFawKNp05kOzFCVaghd3xy1",
    bioText:"Hos oss hittar ni mat och dryck. Det går bra att spela boule eller bara avnjuta den härliga atmosfären med båtar som passerar i kanalen.  Vi har flera spännande ölsorter på fat och flaska. Vi serverar vin, drinkar och självklart har vi alkoholfria alternativ. I vår fantastiska Munk-o-Mobil serveras kaffe, glass och nygräddade munkar för stora och små munnar."
  },
  {
    position: [59.3144622, 18.0745471],
    name: 'Kellys bar',
    admin: "EgmwqnzPAyXU5b86npG0TtoUcmy1",
    bioText:'Trevligt ställe att slinka in på för ett barhäng eller sitta ner och bekanta sig med övriga gäster. Alert personal som tipsade om olika dryckesalternativ.'
  },
  {
    position: [59.3392438, 18.0813002], 
    name: 'The Londoner',
    admin: "4J7flFS4dLdEBkleJcMGGU2o74J3",
    bioText:" Karlavägen går som ett skärp rakt över Östermalm och mitt på skärpet som ett vattenhål att spänna fast i ligger The Londoner. I lokaler vana vid nöjesliv tronar puben likt en engelsk herre vid bardisken.  Pubvågen böljade fram över staden under åttiotalet och nådde här sin östra utpost från city. På Londoner finns de nödvändiga detaljerna: ett stort utbud öl på fat för att skölja ned fisken och de friterade potatisbitarna som är givna inslag på den korta barmenyn. Eller varför inte pröva en Londonertoast."
  },
  {
    position: [59.3431683, 18.049093], 
    name: 'Tranan',
    admin: "NRjc3Xq2ZSRcQnzU2IpE535SNUK2",
    bioText:"Ett ställe att träffas på, kanske äta en bit och ta ett glas. Så såg Stockholmarna på Tranan år 1929 och gör det än idag, över 80 år senare. Tranan har varit öppet sju dagar i veckan och funnits på samma adress, Karlbergsvägen 14, under hela denna tid."
  },
  {
    position: [59.3315633, 18.0312097], 
    name: 'Hirschenkeller',
    admin: "YhnTBUAt1tRZRhWRd5HSlquS6gt1",
    bioText:"Välkommen in över en kall öl eller två, någon smaklig drink eller en bit god mat!  Våra restauranger är trivsamma och naturliga mötesplatser för alla!"
  },
  {
    position:[59.6108993, 16.5338042],
    name: 'Djäknebergets Restaurang',
    admin: "fhVky5X9frgk3JPosdMpEHDXX5F2",
    bioText:"Djäknebergets restaurang erbjuder panoramautsikt över Västerås city.  I en harmonisk miljö erbjuder vi god och vällagad husmanskost både på lunch och till middag. Vi anpassar menyn efter säsongens råvaror och smaker.  Vi ger dig möjlighet att abonnera hela eller delar av restaurangen för bröllop, dop, minnesstund, födelsedagar, och andra högtidsdagar."
  }
]



const myIcon = L.icon ({
  iconUrl: dot,
  iconSize: [30, 30],
  iconAnchor: [0, 41],
  // popupAnchor är relativt till iconAnchor
  popupAnchor: [14, -30],
});

class LocatedTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserCoords: null,
      dbCoords: null,
      bars: null,
    };
  }
 /*Functions*/
  calculateDistance = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // km (change this constant to get miles)
    var dLat = ((lat2 - lat1) * Math.PI) / 180;
    var dLon = ((lon2 - lon1) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    return Math.round(d * 1000);
  };

  
  updatePosition = position => {
    this.setState({
      browserCoords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    });
    if (position.coords && this.state.dbCoords) {
      const { latitude: lat1, longitude: lng1 } = position.coords;
      const { latitude: lat2, longitude: lng2 } = this.state.dbCoords;
      const dist = this.calculateDistance(lat1, lng1, lat2, lng2);
      if (dist > 1) {
        this.writeUserPositionToDB(position.coords);
      }
    }
  };

  getUserPositionFromDB = () => {
    this.props.Firebase
      .user(this.props.userId)
      .child("position")
      .once("value", snapshot => {
        const userPosition = snapshot.val();
        
        this.setState({ dbCoords: userPosition });
      });
};



  writeUserPositionToDB = position => {
    const { latitude, longitude } = position;

    this.props.Firebase
      .user(this.props.userId)
      .update({ position: { latitude: latitude, longitude: longitude } });
    this.setState({ dbCoords: position });
    this.getUserPositionFromDB();
  };

  componentDidMount() {

    this.getUserPositionFromDB();
    this.watchId = navigator.geolocation.watchPosition(

      this.updatePosition,

      error =>{
        console.log("error" + error);
      },

      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 1
      }

    );

    this.props.Firebase
    .bars().once('value', snapshot => {
      const barsObject = snapshot.val()
    // ifall inte barerna finns i firebase databasen
    // så loopas bar arrayen igenom och pushar upp dom till firebase
      if(!barsObject){
        barArray.forEach(bar => {
          this.props.Firebase
          .bars()
          .push({
            admin: bar.admin,
            position: bar.position,
            name: bar.name,
            bioText:bar.bioText

          })
        })
      }
    });

    this.props.Firebase
    .bars().once('value', snapshot => {
      const barsObject = snapshot.val()
      if(barsObject){
        const bArrey =  Object.keys(barsObject).map(key => ({
          ...barsObject[key],
          uid: key,
        }))
        this.setState({
          bars: bArrey,
        })
      }
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {

    return (
      <Styles.Mapp>
        {this.state.browserCoords ? (
          <MyMap
            bars={this.state.bars}
            position={Object.values(this.state.browserCoords)}
            zoom={19}
          />
        ) : null}
      </Styles.Mapp>
    );
  }
}

const MyMap = props => (
  <Map className="map" center={props.position} zoom={16}>
    Loading
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               
                <Marker 
                position={props.position}
                icon={myIcon}>
                  <Popup>
                      Här är din position.
                  </Popup>
                </Marker>
             
               {/* ternery operator behövs utifall att barerna inte har hunnit hämtats hem från db */}
                { props.bars ? props.bars.map((bar, i)=> {
                    return(
                      <Admin
                      key={i}
                      position={bar.position}
                      name={bar.name}
                      uid={bar.uid} 
                    />
                    
                  )
                }) : null}
  </Map>
  
);

export default LocatedTwo;

