import { strokes, stages, types } from '../searchParams';
import { useState } from 'react';

const CreatePost = () => {
  const [selectedStroke, setSelectedStroke] = useState(null);
  const [selectedStages, setSelectedStages] = useState(stages);
  const [selectedtype, setSelectedType] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [teachingPoints, setTeachingPoints] = useState(['']);

  const strokesDisplay = strokes.map((stroke) => {
    return (
      <div key={stroke.id}>
        <label htmlFor={stroke.id}>
          {stroke.name}
          <input
            onChange={(e) => setSelectedStroke(e.target.value)}
            value={stroke.id}
            name='selected-stroke'
            id={stroke.id}
            type='radio'
          />
        </label>
      </div>
    );
  });

  const stageSelectToggle = (e) => {
    const selectedId = e.target.id;
    setSelectedStages((prevStages) => {
      return prevStages.map((stage) => {
        if (stage.id == selectedId) {
          return { ...stage, isChecked: !stage.isChecked };
        } else return { ...stage };
      });
    });
  };

  const stagesDisplay = stages.map((stage) => {
    return (
      <div key={stage.id}>
        <label htmlFor=''>
          <input
            onChange={stageSelectToggle}
            type='checkbox'
            id={stage.id}
            name={stage.id}
          />
          {stage.name}
        </label>
      </div>
    );
  });

  const typesDisplay = types.map((type) => {
    return (
      <div key={type.id}>
        <label htmlFor={type.id}>
          {type.name}
          <input
            value={type.id}
            name='selected-type'
            id={type.id}
            type='radio'
            onChange={(e) => {
              setSelectedType(e.target.value);
            }}
          />
        </label>
      </div>
    );
  });

  console.log(teachingPoints);

  const addTeachingPoint = (e) => {
    e.preventDefault();
    setTeachingPoints((prevState) => [...prevState, '']);
  };

  const editTeachingPoint = (e) => {
    const selectedIndex = e.target.dataset.index;
    setTeachingPoints((prevTeachingPoints) => {
      return prevTeachingPoints.map((item, index) => {
        if (index == selectedIndex) {
          return e.target.value;
        } else return item;
      });
    });
  };

  const removeTeachingPoint = (e) => {
    const selectedIndex = e.target.dataset.index;
    setTeachingPoints((prevTeachingPoints) => {
      prevTeachingPoints.splice(selectedIndex, 1);
      return [...prevTeachingPoints];
    });
  };

  const teachingPointsDisplay = teachingPoints.map((item, index) => {
    return (
      <div key={index}>
        <label>{`#${index + 1}`}</label>
        <input
          data-index={index}
          type='text'
          value={item}
          onChange={editTeachingPoint}></input>
        {teachingPoints.length > 1 ? (
          <i
            className='fa-solid fa-circle-xmark'
            data-index={index}
            onClick={removeTeachingPoint}></i>
        ) : null}
      </div>
    );
  });

  const createNewPost = async (e) => {
    e.preventDefault();
    const response = await fetch();
  };

  return (
    <>
      <h2>Create new post</h2>
      <form onSubmit={createNewPost}>
        <label htmlFor='title'>Post Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          name='title'
          id='title'
          value={title}></input>

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
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <fieldset>
          <legend>Teaching points</legend>
          {teachingPointsDisplay}
          <button onClick={addTeachingPoint}>add new teaching point</button>
        </fieldset>
      </form>
    </>
  );
};

export default CreatePost;
