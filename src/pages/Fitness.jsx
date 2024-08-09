import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from '../extrapages/ExerciseCard';
import TrainerCard from '../extrapages/TrainerCard';
import BookAppointment from '../extrapages/BookAppointment';
import { useAuth } from '../Context/AuthProvider';

const FitnessPage = () => {
  const [trainers, setTrainers] = useState([]);
  const [location, setLocation] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    } else {
      setLoading(false); // Set loading to false once authenticated
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error('Error getting location', error)
      );
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (location) {
      const mockedTrainers = [
        { name: 'John Doe', specialty: 'Fitness Trainer', distance: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRokE5302gAqMRA8yDi-h1yDUtVGzOOUl4V_kaHMFlEryt7gM9r7jkT2HrSJW24YrAoI&usqp=CAU', contact: '555-1234' },
        { name: 'Jane Smith', specialty: 'Yoga Instructor', distance: 3, image: 'https://media.istockphoto.com/id/1527512488/vector/a-brunette-girl-meditates-in-the-lotus-position.jpg?s=612x612&w=0&k=20&c=oO6RCGZg2pJvVhMswJL8AcIhdPF83t2wX4EmsrZSuM0=', contact: '555-5678' },
        { name: 'Mike Johnson', specialty: 'Fitness Trainer', distance: 1.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDdpXSfMBhmJLBglUZFu2rE-LaJ6z-5riwXscLiFdXv86eluDM4K20IHbKquTiHsLSjw&usqp=CAU', contact: '555-8765' },
        { name: 'Emily Davis', specialty: 'Pilates Instructor', distance: 2.5, image: 'https://static.vecteezy.com/system/resources/previews/014/347/209/original/pilates-training-icon-cartoon-style-vector.jpg', contact: '555-4321' },
        { name: 'Chris Lee', specialty: 'Cardio Trainer', distance: 2.2, image: 'https://previews.123rf.com/images/nadine3000/nadine30001703/nadine3000170300029/74300377-personal-fitness-trainer-or-bodybuilder-cartoon-character-vecto.jpg', contact: '555-8765' },
      ];
      setTrainers(mockedTrainers);

      fetch(`https://api.example.com/trainers?lat=${location.latitude}&lng=${location.longitude}`)
        .then((response) => response.json())
        .then((data) => setTrainers(data))
        .catch((error) => console.error('Error fetching trainers', error));
    }
  }, [location]);

  const exercises = [
    {
      name: 'Jumping Jacks',
      image: 'https://thumbs.dreamstime.com/b/art-illustration-198574312.jpg',
      description: 'A full-body exercise that increases cardiovascular fitness and muscle endurance.',
      steps: ['Stand upright with your legs together, arms at your sides.', 'Bend your knees slightly, and jump into the air.', 'As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head.', 'Jump back to starting position. Repeat.']
    },
    {
      name: 'Push-ups',
      image: 'https://static.vecteezy.com/system/resources/previews/014/947/448/original/strong-man-doing-push-ups-semi-flat-color-character-editable-figure-full-body-person-on-white-workout-simple-cartoon-style-illustration-for-web-graphic-design-and-animation-vector.jpg',
      description: 'A basic exercise used in civilian athletic training or physical education and commonly in military physical training.',
      steps: ['Start in a plank position with your arms straight.', 'Lower your body until your chest nearly touches the floor.', 'Pause, then push yourself back up. Repeat.']
    },
    {
      name: 'Sit-ups',
      image: 'https://thumbs.dreamstime.com/b/illustration-man-doing-sit-up-exercise-vector-image-325324409.jpg',
      description: 'An abdominal endurance training exercise to strengthen and tone the abdominal muscles.',
      steps: ['Lie on your back with your knees bent and feet flat on the ground.', 'Place your fingertips behind your ears.', 'Curl your upper body all the way up toward your knees.', 'Slowly, lower yourself down. Repeat.']
    },
    {
      name: 'Burpees',
      image: 'https://www.shutterstock.com/image-vector/man-doing-squat-thrust-burpee-600nw-1841027083.jpg',
      description: 'A lower body exercise that strengthens the muscles of the thighs, hips, and buttocks.',
      steps: ['Stand with your feet shoulder-width apart.', 'Lower your hips as if you’re sitting back into a chair.', 'Lower yourself until your thighs are parallel to the floor.', 'Return to the starting position. Repeat.']
    },
    {
      name: 'Plank',
      image: 'https://cdn.pixabay.com/photo/2021/08/25/11/30/plank-6573171_960_720.png',
      description: 'An isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.',
      steps: ['Start in a push-up position but bend your elbows and rest your weight on your forearms.', 'Your body should form a straight line from your shoulders to your ankles.', 'Engage your core by tightening your abs. Hold the position.']
    },
    {
      name: 'Lunges',
      image: 'https://www.shutterstock.com/image-vector/man-doing-dumbbell-walking-lunges-600nw-2048783186.jpg',
      description: 'A lower-body exercise that works the hips, glutes, quads, hamstrings, and core.',
      steps: ['Stand upright with your feet together.', 'Take a big step forward with your right leg and lower your body until your right thigh is parallel to the floor.', 'Push back up to the starting position. Repeat with the left leg.']
    },
  ];

  const handleCallTrainer = (trainer) => {
    console.log(`Calling ${trainer.name} at ${trainer.contact}`);
  };

  const handleBookAppointment = (trainer) => {
    setSelectedTrainer(trainer);
    navigate('/book-appointment', { state: { trainer } });
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading message while checking authentication
  }

  return (
    <div className="mx-auto p-4 my-20 px-16">
      <h1 className="font-bold mb-4 text-6xl">Morning Exercises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <h1 className="text-3xl font-bold mt-8 text-blue-600 mb-4">Nearby Fitness and Yoga Trainers</h1>
      {location ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              trainer={trainer}
              handleCallTrainer={handleCallTrainer}
              handleBookAppointment={handleBookAppointment}
            />
          ))}
        </div>
      ) : (
        <p>Loading trainers...</p>
      )}
    </div>
  );
};

export default FitnessPage;
