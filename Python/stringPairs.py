def main():
    # inputStr = "12345678"
    inputStr = "123R456"
    output = []

    left, right = 0, len(inputStr) - 1

    # Using two pointers, one from the left end of list and the other from the right
    # The loop will run untill the two pointers meet or pass each other
    while left < right:
        output.append((inputStr[left], inputStr[right]))
        left += 1
        right -= 1

    # For input string with odd length
    if left == right:
        output.append((inputStr[left],))

    print(output) 



if __name__ == "__main__":
    main()