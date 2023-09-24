import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkelition = () => {
  return (
    <Card>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkelition;
