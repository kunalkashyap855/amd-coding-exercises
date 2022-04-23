def max(arr):
    if len(arr) == 0:
        return 0

    currMax = max(arr[1:])

    if arr[0] > currMax:
        return arr[0]

    return currMax

def main():
    input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    # input = [2, 5, 33, 20, 42, 12, 18, 9, 36, 72, 34, 56]
    print(max(input))

if __name__ == "__main__":
    main()