import { strokes, stages, types } from '../searchParams';
import { useState } from 'react';

const CreatePost = () => {
  const [selectedStroke, setSelectedStroke] = useState(null);
  const [selectedStages, setSelectedStages] = useState(null);
  const [selectedtype, setSelectedType] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [teachingPoints, setTeachingPoints] = useState(['']);

  const strokesDisplay = strokes.map((stroke) => {
    return (
      <>
        <label htmlFor={stroke.id}>
          {stroke.name}
          <input
            value={stroke.id}
            name='selected-stroke'
            id={stroke.id}
            type='radio'
          />
        </label>
      </>
    );
  });

  const stagesDisplay = stages.map((stage) => {
    return (
      <>
        <label htmlFor=''>
          <input type='checkbox' id={stage.id} name={stage.id} />
          {stage.name}
        </label>
      </>
    );
  });

  const typesDisplay = types.map((type) => {
    return (
      <>
        <label htmlFor={type.id}>
          {type.name}
          <input
            value={type.id}
            name='selected-type'
            id={type.id}
            type='radio'
          />
        </label>
      </>
    );
  });

  const teachingPointsDisplay = teachingPoints.map((item) => {
    return <input type='text' value={item}></input>;
  });

  return (
    <>
      <h2>Create new post</h2>
      <form>
        <label htmlFor='title'>Post Title</label>
        <input type='text' name='title' id='title'></input>

        <fieldset>
          <legend>Exercise or Tip?</legend>
          {typesDisplay}
        </fieldset>

        <fieldset>
          <legend>Stroke</legend>
          {strokesDisplay}
        </fieldset>

        <fieldset>
          <legend>Applicable Stages</legend>
          {stagesDisplay}
        </fieldset>

        <label htmlFor='description'>Description</label>
        <textarea></textarea>

        <fieldset>
          <legend>Teaching points</legend>
          {teachingPointsDisplay}
          <button>add teaching point</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreatePost;

// teaching points - series of text inputs
