## Venture Concept Scoring

### Description

Score each venture concept based on TAM/SAM/SOM and select the top 3 concepts.

### When to Use

This skill is used in the Automated Venture Building Studio for a European energy company (primarily B2C) to run the full venture studio process end-to-end autonomously.

### Step-by-Step Instructions

1. Conduct research on each sub-sector using web-search MCP (mcp_call server_name=web-search tool_name=web_search)
2. For each sub-sector, identify 5+ relevant venture concepts
3. Score each venture concept based on TAM/SAM/SOM
4. Select the top 3 concepts based on the scoring

### Output Template

{
  'top_concepts': [
    {
      'brand_name': 'String',
      'product': 'String',
      'target_customer_segment': 'String',
      'differentiated_angle': 'String'
    }
  ]
}

### Quality Criteria

* The top 3 concepts are selected correctly
* All required information is included

### Common Mistakes to Avoid

* Failing to extract relevant information from the research
* Not using the correct scoring template
* Selecting concepts that do not meet the quality criteria