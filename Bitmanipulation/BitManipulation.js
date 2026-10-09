class BitManipulation {
    static getBit(n, k) {
        return ((n >> k) & 1);
    }

    static setBit(n, k) {
        n = ((1 << k) | n);
        return n;
    }

    static clearBit(n, k) {
        n = (n & ~(1 << k));
        return n;
    }

    static toggleBit(n, k) {
        n = (n ^ (1 << k));
        return n;
    }

    static isPowerOfTwo(n) {
        if (n > 0 && (n & (n - 1)) === 0) {
            return true;
        }
        return false;
    }

    static countSetBits(n) {
        let count = 0;
        while (n > 0) {
            n = (n & (n - 1));
            count++;
        }
        return count;
    }
}