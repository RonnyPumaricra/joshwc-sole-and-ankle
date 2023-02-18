import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const realImgSrc = process.env.PUBLIC_URL + imageSrc

  const Flag = ({variant}) => {
    const isOnSale = variant === "on-sale"
    const txt = isOnSale ? "Sale" : "Just released!"
    const color = isOnSale ? COLORS.primary : COLORS.secondary
    return <ImageFlag bg={color}>{txt}</ImageFlag> 
  }

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {
            variant !== "default"
            ? <Flag variant={variant} />
            : <></>
          }
          <Image alt="" src={realImgSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  flex-grow: 1;
  width: 300px;
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  margin-right: 4px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageFlag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background: ${p => p.bg};
  color: ${COLORS.white};
  font-weight: 600;
  padding: 9px;
  padding-top: 7px;
  border-radius: 2px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
