import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

// --- DATA STRUCTURE (No changes here, as eventDescription is used for photos) ---
const allGalleries = [
  {
    "eventTitle": "The Role of Religious Leaders in Peace",
    "eventDescription": "Organized by Peace for Ethiopia in collaboration with World Vision Ethiopia, this event focused on the crucial role of religious leaders in fostering peace and reconciliation.",
    "date": "April 29, 2025",
    "location": "Nexus, Addis Ababa, Ethiopia",
"photos": [
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886704/photo_9_2025-07-30_17-39-24_xfycwf.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886702/photo_8_2025-07-30_17-39-24_hho1wo.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886700/photo_7_2025-07-30_17-39-24_yi1evi.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886699/photo_6_2025-07-30_17-39-24_mzhdrj.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886697/photo_5_2025-07-30_17-39-24_cx83gl.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886696/photo_4_2025-07-30_17-39-24_mvokpa.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886694/photo_3_2025-07-30_17-39-24_wz8nff.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886692/photo_2_2025-07-30_17-39-24_tdbz1c.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886691/photo_1_2025-07-30_17-39-24_veh6nb.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886689/photo_6_2025-07-30_17-43-09_mbomxr.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886688/photo_5_2025-07-30_17-43-09_qr73an.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886686/photo_4_2025-07-30_17-43-09_prxvr0.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886686/photo_3_2025-07-30_17-43-09_c4gfqh.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886684/photo_1_2025-07-30_17-43-09_mk6isk.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753886684/photo_2_2025-07-30_17-43-09_grfaub.jpg",
      "title": "Inter-community Dialogues between Oromo and Gumuz Communities"
    }
  ]
  },
  {
    "eventTitle": "Inter-community Dialogues between Oromo and Gumuz Communities",
    "eventDescription": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones.",
    "date": "May 14-15, 2025",
    "location": "Asossa town",
   "photos": [
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887134/photo_8_2025-07-30_17-41-07_txylz8.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887131/photo_7_2025-07-30_17-41-07_gpqnzi.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887127/photo_6_2025-07-30_17-41-07_evxxio.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887123/photo_5_2025-07-30_17-41-07_j05uxj.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887119/photo_4_2025-07-30_17-41-07_visavh.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887115/photo_3_2025-07-30_17-41-07_yoyhat.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887111/photo_2_2025-07-30_17-41-07_nvw8br.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887101/photo_8_2025-07-30_17-41-07_bc0hbz.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887107/photo_1_2025-07-30_17-41-07_jlifte.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887101/photo_8_2025-07-30_17-41-07_bc0hbz.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887096/photo_7_2025-07-30_17-41-07_aipty2.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887093/photo_6_2025-07-30_17-41-07_ncn7jn.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887086/photo_5_2025-07-30_17-41-07_k6hsr5.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887081/photo_4_2025-07-30_17-41-07_csxo5a.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887076/photo_3_2025-07-30_17-41-07_cpcap4.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887073/photo_2_2025-07-30_17-41-07_rfwk6s.jpg",
      "title": "These dialogues fostered understanding and built bridges between Oromo and Gumuz Communities across West Wollega, East Wollega, and Kemashi Zones."
    }
  ]
  },
  {
    "eventTitle": "Peacebuilding Conference",
    "eventDescription": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace.",
    "date": "June 27, 2025",
    "location": "Nexus Hotel in Addis Ababa",
 "photos": [
    {
      "src": "https://res.cloudinary.com/droslno9i/image/upload/v1752242904/photo_2025-07-07_13-51-02_sybtox.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887430/photo_8_2025-07-30_17-37-49_hrkcpb.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887424/photo_7_2025-07-30_17-37-49_m7hwdr.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887393/photo_6_2025-07-30_17-37-49_ewrx9w.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887374/photo_5_2025-07-30_17-37-49_lcdwog.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887370/photo_4_2025-07-30_17-37-49_twvm5y.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887365/photo_3_2025-07-30_17-37-49_ds27gh.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887360/photo_2_2025-07-30_17-37-49_bqtbbx.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    },
    {
      "src": "https://res.cloudinary.com/di5zfjqlt/image/upload/v1753887357/photo_1_2025-07-30_17-37-49_cef4ud.jpg",
      "title": "World Vision Ethiopia, in collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference, bringing together diverse stakeholders to discuss strategies for sustainable peace"
    }
  ]
  }
];

const GalleryHighlights = () => {
  const religiousLeadersEvents = allGalleries.filter(
    (event) => event.eventTitle === "The Role of Religious Leaders in Peace"
  );

  const interCommunityDialoguesEvents = allGalleries.filter(
    (event) => event.eventTitle.includes("Inter-community Dialogues")
  );

  const peacebuildingConferenceEvents = allGalleries.filter(
    (event) => event.eventTitle === "Peacebuilding Conference"
  );

  const GallerySection = ({ sectionTitle, events }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        {sectionTitle}
      </h3>
      {events.map((event, eventIndex) => (
        <div key={`event-${eventIndex}`} className="mb-12 bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          {/* Event-level details displayed once per event */}
          <h4 className="text-3xl font-bold text-blue-900 mb-4">
            {event.eventTitle}
          </h4>
          <p className="text-gray-600 flex items-center mb-2">
            <CalendarDays className="h-5 w-5 text-gray-500 mr-2" />
            {event.date}
          </p>
          <p className="text-gray-600 flex items-center mb-4">
            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
            {event.location}
          </p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {event.eventDescription}
          </p>

          {/* Grid to display ALL individual photos for this event */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {event.photos.map((photo, photoIndex) => (
              <div
                key={`photo-${eventIndex}-${photoIndex}`}
                // Creative box styling for EACH individual photo
                className="group relative bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-w-1 aspect-h-1 overflow-hidden flex items-center justify-center bg-gray-900">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    // object-contain: Ensures entire image is visible without cropping.
                    // Blank bars will appear if image aspect ratio doesn't match square.
                    className="object-contain w-full h-full transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  {/* Photo Title with Date */}
                  <h5 className="text-lg font-semibold text-blue-800 mb-1">
                    {photo.title} ({event.date})
                  </h5>
                  {/* Small Description (using event description) */}
                  <p className="text-gray-600 text-xs leading-snug">
                    {event.eventDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <GallerySection
          sectionTitle="1. The Role of Religious Leaders in Peace"
          events={religiousLeadersEvents}
        />

        <GallerySection
          sectionTitle="2. Inter-community Dialogues"
          events={interCommunityDialoguesEvents}
        />

        <GallerySection
          sectionTitle="3. Peacebuilding Conference"
          events={peacebuildingConferenceEvents}
        />

      </div>
    </section>
  );
};

export default GalleryHighlights;