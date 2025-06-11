import React from 'react';
import styled from 'styled-components';
import { SITE_CONFIG } from '../config/site';

const Footer = () => {
  return (
       <FooterContainer>
      <FooterWrapper>
        <LogoRow>
        </LogoRow>
        <InfoText>
          주소: {SITE_CONFIG.contact.address} &nbsp;&nbsp;&nbsp;
          대표전화: {SITE_CONFIG.contact.phone} &nbsp;&nbsp;&nbsp;
          관리자: {SITE_CONFIG.info.ceo} &nbsp;&nbsp;&nbsp; 상호: {SITE_CONFIG.name} &nbsp;&nbsp;&nbsp;
          사업자등록번호: {SITE_CONFIG.info.company_number} &nbsp;&nbsp;&nbsp;
          이메일: {SITE_CONFIG.contact.email} &nbsp;&nbsp;&nbsp;
        </InfoText>
        <Copyright>{SITE_CONFIG.description}</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: ${({ theme }) => theme.spacing[10]} 0;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LogoRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

const InfoText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
`;

const Copyright = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export default Footer;
