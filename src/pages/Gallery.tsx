import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const albums = [
    {
      id: 1,
      title: 'Women for Peace - Addis Ababa',
      date: 'March 2024',
      location: 'Addis Ababa',
      category: 'women',
      description: 'Empowering women as peace ambassadors and leaders in conflict resolution.',
      coverImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 2,
      title: 'Unity Rally in Oromia',
      date: 'February 2024',
      location: 'Oromia Region',
      category: 'community',
      description: 'Community leaders and members coming together to discuss unity and peace.',
      coverImage: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 3,
      title: 'Youth Peace Summit',
      date: 'January 2024',
      location: 'Bahir Dar',
      category: 'youth',
      description: 'Young leaders from across Ethiopia gathering to discuss peace and reconciliation.',
      coverImage: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 4,
      title: 'Tigray Reconciliation Summit',
      date: 'December 2023',
      location: 'Tigray Region',
      category: 'reconciliation',
      description: 'Historic gathering focused on healing and understanding in the Tigray region.',
      coverImage: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 5,
      title: 'Interfaith Peace Dialogue',
      date: 'November 2023',
      location: 'Dire Dawa',
      category: 'interfaith',
      description: 'Religious leaders from different faiths coming together for peaceful dialogue.',
      coverImage: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    {
      id: 6,
      title: 'Community Healing Circle',
      date: 'October 2023',
      location: 'Harar',
      category: 'community',
      description: 'Grassroots peace-building and community healing activities.',
      coverImage: 'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600',
      images: [
        'https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'women', label: 'Women for Peace' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'community', label: 'Community Events' },
    { id: 'reconciliation', label: 'Reconciliation' },
    { id: 'interfaith', label: 'Interfaith Dialogue' },
  ];

  const filteredAlbums = filter === 'all' ? albums : albums.filter(album => album.category === filter);

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
      const currentAlbum = filteredAlbums[selectedAlbum];
      const nextIndex = (selectedImage + 1) % currentAlbum.images.length;
      setSelectedImage(nextIndex);
    }
  };

  const prevImage = () => {
    if (selectedAlbum !== null && selectedImage !== null) {
      const currentAlbum = filteredAlbums[selectedAlbum];
      const prevIndex = selectedImage === 0 ? currentAlbum.images.length - 1 : selectedImage - 1;
      setSelectedImage(prevIndex);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Peace Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Witness the powerful moments of unity, hope, and reconciliation from our 
              peace-building events across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === filterItem.id
                    ? 'bg-yellow-500 text-blue-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.map((album, albumIndex) => (
              <div key={album.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                    {album.images.length} photos
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{album.title}</h3>
                  <p className="text-gray-600 mb-4">{album.description}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{album.date}</span>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{album.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {album.images.slice(0, 4).map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`${album.title} - ${imageIndex + 1}`}
                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        onClick={() => openLightbox(albumIndex, imageIndex)}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => openLightbox(albumIndex, 0)}
                    className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    View All Photos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              src={filteredAlbums[selectedAlbum].images[selectedImage]}
              alt={`${filteredAlbums[selectedAlbum].title} - ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-lg font-semibold mb-1">{filteredAlbums[selectedAlbum].title}</h3>
              <p className="text-sm opacity-80">
                {selectedImage + 1} of {filteredAlbums[selectedAlbum].images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;