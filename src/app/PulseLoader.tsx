"use client";
import '@/app/globals.css';
import React, {PureComponent} from 'react';
import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

const pulse = keyframes`
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.0);
    }
`;

const Wrapper = styled('div')`
    display: inline-block;
`;

const Dot = styled('div')<{ size?: number; color?: string; duration?: number }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ color }) => color};
    border-radius: 100%;
    display: inline-block;
    animation: ${pulse} ${({ duration }) => duration}ms infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);

    &:nth-of-type(1) {
        animation-delay: -0.32s;
    }

    &:nth-of-type(2) {
        animation-delay: -0.16s;
    }

    &:nth-of-type(3) {
        animation-delay: 0s;
    }

    &:nth-of-type(4) {
        animation-delay: 0.16s;
    }

    &:nth-of-type(5) {
        animation-delay: 0.32s;
    }
`;

interface PulseLoaderProps {
    size?: number;
    colors?: string[]; // Array of colors for each dot
    loading?: boolean;
    duration?: number;
}

class PulseLoader extends PureComponent<PulseLoaderProps> {
    render() {
        const { size = 12, colors = [], loading = true, duration = 1000 } = this.props;

        return (
            <Wrapper>
                {loading && (
                    <>
                        {colors.map((color, index) => (
                            <Dot key={index} size={size} color={color} duration={duration} />
                        ))}
                    </>
                )}
            </Wrapper>
        );
    }
}

export default PulseLoader;