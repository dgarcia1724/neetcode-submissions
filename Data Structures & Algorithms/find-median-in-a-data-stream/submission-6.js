/**
 * const { PriorityQueue, MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class MedianFinder {
    constructor() {
        this.small = new PriorityQueue((a, b) => b - a); // Max heap for smaller half
        this.large = new PriorityQueue((a, b) => a - b); // Min heap for larger half
    }

    /**
     * @param {number} num
     */
    addNum(num) {
        if (this.large.isEmpty() || num > this.large.front()) {
            this.large.push(num);
        } else {
            this.small.push(num);
        }

        if (this.small.size() > this.large.size() + 1) {
            this.large.push(this.small.dequeue());
        } else if (this.large.size() > this.small.size() + 1) {
            this.small.push(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front()) / 2.0;
        }
    }
}