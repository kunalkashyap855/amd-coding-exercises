import json

def jsonTransform(data):
    data["superherosbyCity"] = []

    # Creating an empty list for each city in input dict
    for hero in data["superheros"]:
        if any(hero["city"] in cityObj for cityObj in data["superherosbyCity"]):
            pass
        else:
            data["superherosbyCity"].append(
                {hero["city"]: []}
            )

    # Appending each hero's name in its respective city (it is guaranteed that the 'if condition' will be true for atleast 1 city)
    for hero in data["superheros"]:
        for city in data["superherosbyCity"]:
            if hero["city"] in city:
                city[hero["city"]].append(hero["name"])
                break

    # Removing the input JSON from the dictionary to match the desired output
    data.pop("superheros")
    return data

def main():
    # Reading input JSON from a JSON file
    with open('data.json', 'r') as jsondata:
        jd=jsondata.read()

    data = json.loads(jd)

    # Calling the function to transform JSON
    transformedData = jsonTransform(data)

    # Writing the transformed JSON to a JSON file
    json_string = json.dumps(transformedData)
    with open('transformedData.json', 'w') as outfile:
        outfile.write(json_string)

    print("Data Transformed successfully and saved in 'transformedData.json'.")

if __name__ == "__main__":
    main()