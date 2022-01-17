import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({
  repository
}) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount
  } = repository;

  console.log(repository);

  return (
    <>
      <RepositoryData label={'Full name'} content={fullName} />
      <RepositoryData label={'Description'} content={description} />
      <RepositoryData label={'Language'} content={language} />
      <RepositoryData label={'Stars'} content={stargazersCount} />
      <RepositoryData label={'Forks'} content={forksCount} />
      <RepositoryData label={'Reviews'} content={reviewCount} />
      <RepositoryData label={'Rating'} content={ratingAverage} />
    </>
  );
};

const RepositoryData = ({ label, content }) =>
  (<Text>{label}: {content}</Text>);

export default RepositoryItem;