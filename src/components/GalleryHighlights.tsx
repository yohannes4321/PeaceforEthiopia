import React, { useState } from 'react';
import { Eye, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryHighlights: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleries = [
    {
      title: 'World Vision Ethiopia',
      images: [
        '../../public/worldvission/photo_2025-07-07_13-51-02.jpg',
        '../../public/worldvission/2.jpg',
        '../../public/worldvission/photo_2025-07-07_13-51-02.jpg',
        '../../public/worldvission/photo_2025-07-07_13-51-23.jpg',
        '../../public/worldvission/photo_2025-07-07_13-51-30.jpg',
        '../../public/worldvission/photo_2025-07-07_13-51-39.jpg',
        '../../public/worldvission/photo_2025-07-07_13-51-51.jpg',
        '../../public/worldvission/3.jpg',
        '../../public/worldvission/4.jpg',
        '../../public/worldvission/5.jpg',
        
      ],
      description: 'collaboration with Peace for Ethiopia, successfully hosted a Peacebuilding Conference at Nexus Hotel in Addis Ababa.'
    },
    {
      title: 'inter community dialogues between Oromo and Gumuz ',
      images: [
'../../public/keflhagre/1.jpg', '../../public/keflhagre/2.jpg', '../../public/keflhagre/photo_2025-07-07_14-05-50.jpg', '../../public/keflhagre/photo_2025-07-07_14-05-39.jpg', '../../public/keflhagre/photo_2025-07-07_14-05-33.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-53.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-46.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-40.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-31.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-23.jpg', '../../public/keflhagre/photo_2025-07-07_14-04-11.jpg', '../../public/keflhagre/photo_2025-07-07_14-03-25.jpg'


      ],
      description: 'Communities in West Wollega, East Wollega and Kemashi Zones  Asossa town from March18- 21/2025'
    },
    {
      title: 'Youth Conference on Peace',
      images: [
'../../public/3/photo_2025-07-07_14-20-06.jpg','../../public/3/photo_2025-07-07_14-21-09.jpg', '../../public/3/photo_2025-07-07_14-21-04.jpg', '../../public/3/photo_2025-07-07_14-20-47.jpg', '../../public/3/photo_2025-07-07_14-20-39.jpg', '../../public/3/photo_2025-07-07_14-20-26.jpg', '../../public/3/photo_2025-07-07_14-20-18.jpg', '../../public/3/photo_2025-07-07_14-20-12.jpg', '../../public/3/photo_2025-07-07_14-19-57.jpg', '../../public/3/photo_2025-07-07_14-19-09.jpg'

      ],
      description: 'Young voices shaping the future of Ethiopia'
    },
    {
      title: 'Tigray Reconciliation Summit',
      images: [
'../../public/4/photo_2025-07-07_14-42-28.jpg','../../public/4/photo_2025-07-07_14-43-23.jpg', '../../public/4/photo_2025-07-07_14-41-52.jpg', '../../public/4/photo_2025-07-07_14-41-42.jpg', '../../public/4/photo_2025-07-07_14-38-47.jpg', '../../public/4/photo_2025-07-07_14-38-31.jpg', '../../public/4/photo_2025-07-07_14-38-26.jpg', '../../public/4/photo_2025-07-07_14-37-33.jpg'

      ],
      description: 'Historic gathering for healing and understanding'
    },
    {
      title: 'Interfaith Peace Dialogue',
      images: [
'../../public/5/photo_2025-07-07_14-43-23.jpg', '../../public/5/photo_2025-07-07_14-42-28.jpg', '../../public/5/photo_2025-07-07_14-41-52.jpg', '../../public/5/photo_2025-07-07_14-41-42.jpg', '../../public/5/photo_2025-07-07_14-38-47.jpg', '../../public/5/photo_2025-07-07_14-38-31.jpg', '../../public/5/photo_2025-07-07_14-38-26.jpg', '../../public/5/photo_2025-07-07_14-37-33.jpg'
      ],
      description: 'Religious leaders united for peace'
    },
    {
      title: 'Community Healing Circle',
      images: [
        'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
      ],
      description: 'Grassroots peace building in action'
    },
  ];

  const openLightbox = (albumIndex: number, imageIndex: number) => {
    setSelectedAlbum(albumIndex);
    setSelectedImage(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedAlbum !== null && selectedImage !== null) {
      const currentAlbum = galleries[selectedAlbum];
      const nextIndex = (selectedImage + 1) % currentAlbum.images.length;
      setSelectedImage(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedAlbum !== null && selectedImage !== null) {
      const currentAlbum = galleries[selectedAlbum];
      const prevIndex = selectedImage === 0 ? currentAlbum.images.length - 1 : selectedImage - 1;
      setSelectedImage(prevIndex);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Gallery Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the powerful moments of unity, hope, and reconciliation from our 
            peace-building events across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={gallery.images[0]}
                  alt={gallery.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {gallery.images.length} photos
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {gallery.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {gallery.description}
                </p>
                
                {/* Show first 5 photos in grid */}
                <div className="grid grid-cols-5 gap-1 mb-4">
                  {gallery.images.slice(0, 5).map((image, imageIndex) => (
                    <div key={imageIndex} className="relative">
                      <img
                        src={image}
                        alt={`${gallery.title} - ${imageIndex + 1}`}
                        className="w-full h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        onClick={() => openLightbox(index, imageIndex)}
                      />
                      {imageIndex === 4 && gallery.images.length > 5 && (
                        <div 
                          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded cursor-pointer"
                          onClick={() => openLightbox(index, imageIndex)}
                        >
                          <span className="text-white text-xs font-medium">
                            +{gallery.images.length - 5}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div 
                  className="flex items-center text-blue-900 font-medium group-hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => openLightbox(index, 0)}
                >
                  <span>View All Photos</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-800 transition-colors duration-200">
            View Full Gallery
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedAlbum !== null && selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <img
              src={galleries[selectedAlbum].images[selectedImage]}
              alt={`${galleries[selectedAlbum].title} - ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-lg font-semibold mb-1">{galleries[selectedAlbum].title}</h3>
              <p className="text-sm opacity-80">
                {selectedImage + 1} of {galleries[selectedAlbum].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryHighlights;