import { useContext, useState } from 'react';
import { CarsContext } from '../../contexts/CarsContext';
import { ResetInputButton } from '../ResetInputButton';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { GrSubtractCircle } from 'react-icons/gr';
import styles from './styles.module.scss';

interface SearchFilterProps {
  handleCheckboxFilter: (filter: string) => void;
  handleSearchTerm: (text: string) => void;
}

export function SearchFilters({
  handleCheckboxFilter,
  handleSearchTerm
}: SearchFilterProps) {
  const cars = useContext(CarsContext);
  const limit = 3;
  const [makeLimit, setMakeLimit] = useState(limit);
  const [modelLimit, setModelLimit] = useState(limit);
  const [typeLimit, setTypeLimit] = useState(limit);
  const [colorLimit, setColorLimit] = useState(limit);

  // array of unique car attributes
  const uniqueMakes = [...new Set(cars.map(car => car.make))];
  const uniqueModels = [...new Set(cars.map(car => car.model))];
  const uniqueTypes = [...new Set(cars.map(car => car.type))];
  const uniqueColors = [...new Set(cars.map(car => car.color))];
  const uniqueTransmissions = [...new Set(cars.map(car => car.transmission))];
  const uniqueFuels = [...new Set(cars.map(car => car.fuel))];

  // collections
  const carMakeCollection = new Map();
  const carModelCollection = new Map();
  const carTypeCollection = new Map();
  const carColorCollection = new Map();
  const carTransmissionCollection = new Map();
  const carFuelCollection = new Map();

  function handleCollections(collection: Map<any, any>, attribute: string) {
    cars.forEach(car => {
      if (!collection.has(car[`${attribute}`])) {
        collection.set(car[`${attribute}`], 0);
      }
      collection.set(
        car[`${attribute}`],
        collection.get(car[`${attribute}`]) + 1
      );
    });
  }

  handleCollections(carMakeCollection, 'make');
  handleCollections(carModelCollection, 'model');
  handleCollections(carTypeCollection, 'type');
  handleCollections(carColorCollection, 'color');
  handleCollections(carTransmissionCollection, 'transmission');
  handleCollections(carFuelCollection, 'fuel');

  return (
    <div className={styles.container}>
      <h4>Modelos</h4>

      {uniqueModels.slice(0, modelLimit).map(model => {
        return (
          <slot key={model} className={styles.slot}>
            <input
              type="radio"
              name={'filter'}
              value={model.toString()}
              onChange={event => {
                if (event.target.checked === true) {
                  handleCheckboxFilter(event.target.value.toString());
                } else handleCheckboxFilter('');
              }}
            />
            <label htmlFor="filter">
              {model.toString()}{' '}
              {`(${carModelCollection.get(model.toString())})`}
            </label>
          </slot>
        );
      })}

      {uniqueModels.length <= limit ? null : (
        <button
          onClick={() => {
            modelLimit == uniqueModels.length
              ? setModelLimit(limit)
              : setModelLimit(uniqueModels.length);
          }}
          className={styles.expandOrShrink}
        >
          <span>
            <i>
              {modelLimit == limit ? (
                <IoMdAddCircleOutline
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              ) : (
                <GrSubtractCircle
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              )}
            </i>
            ver {modelLimit == limit ? 'mais' : 'menos'}
          </span>
        </button>
      )}

      <h4>Carroceria</h4>

      {uniqueTypes.slice(0, typeLimit).map(type => {
        return (
          <slot key={type} className={styles.slot}>
            <input
              type="radio"
              name={'filter'}
              value={type.toString()}
              onChange={event => {
                if (event.target.checked === true) {
                  handleCheckboxFilter(event.target.value.toString());
                } else handleCheckboxFilter('');
              }}
            />
            <label htmlFor="filter">
              {type.toString()} {`(${carTypeCollection.get(type.toString())})`}
            </label>
          </slot>
        );
      })}

      {uniqueTypes.length <= limit ? null : (
        <button
          onClick={() => {
            typeLimit == uniqueTypes.length
              ? setTypeLimit(limit)
              : setTypeLimit(uniqueTypes.length);
          }}
          className={styles.expandOrShrink}
        >
          <span>
            <i>
              {typeLimit == limit ? (
                <IoMdAddCircleOutline
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              ) : (
                <GrSubtractCircle
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              )}
            </i>
            ver {typeLimit == limit ? 'mais' : 'menos'}
          </span>
        </button>
      )}

      <h4>Cor</h4>

      {uniqueColors.slice(0, colorLimit).map(color => {
        return (
          <slot key={color} className={styles.slot}>
            <input
              type="radio"
              name={'filter'}
              value={color.toString()}
              onChange={event => {
                if (event.target.checked === true) {
                  handleCheckboxFilter(event.target.value.toString());
                } else handleCheckboxFilter('');
              }}
            />
            <label htmlFor="filter">
              {color.toString()}{' '}
              {`(${carColorCollection.get(color.toString())})`}
            </label>
          </slot>
        );
      })}

      {uniqueColors.length <= limit ? null : (
        <button
          onClick={() => {
            colorLimit == uniqueColors.length
              ? setColorLimit(limit)
              : setColorLimit(uniqueColors.length);
          }}
          className={styles.expandOrShrink}
        >
          <span>
            <i>
              {colorLimit == limit ? (
                <IoMdAddCircleOutline
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              ) : (
                <GrSubtractCircle
                  style={{ verticalAlign: 'middle', marginRight: '5px' }}
                />
              )}
            </i>
            ver {colorLimit == limit ? 'mais' : 'menos'}
          </span>
        </button>
      )}

      <h4>Transmissão</h4>

      {uniqueTransmissions.map(transmission => {
        return (
          <slot key={transmission} className={styles.slot}>
            <input
              type="radio"
              name={'filter'}
              value={transmission.toString()}
              onChange={event => {
                if (event.target.checked === true) {
                  handleCheckboxFilter(event.target.value.toString());
                } else handleCheckboxFilter('');
              }}
            />
            <label htmlFor="filter">
              {transmission.toString()}{' '}
              {`(${carTransmissionCollection.get(transmission.toString())})`}
            </label>
          </slot>
        );
      })}

      <h4>Combustível</h4>

      {uniqueFuels.map(fuel => {
        return (
          <slot key={fuel} className={styles.slot}>
            <input
              type="radio"
              name={'filter'}
              value={fuel.toString()}
              onChange={event => {
                if (event.target.checked === true) {
                  handleCheckboxFilter(event.target.value.toString());
                } else handleCheckboxFilter('');
              }}
            />
            <label htmlFor="filter">
              {fuel.toString()} {`(${carFuelCollection.get(fuel.toString())})`}
            </label>
          </slot>
        );
      })}

      <ResetInputButton
        handleCheckboxFilter={handleCheckboxFilter}
        handleSearchTerm={handleSearchTerm}
      />
    </div>
  );
}
