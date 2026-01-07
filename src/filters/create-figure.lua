function Div(el)
  -- Check if the Div has an ID starting with 'fig-' or 'figure' class
  if el.identifier:find('^fig-') or el.classes:includes('figure') then
    
    -- Identify the caption (last paragraph)
    local content = el.content
    local last_item = content[#content]
    
    if last_item and last_item.t == 'Para' then
      local caption = last_item.content
      -- Remove the caption from the main content
      content:remove(#content)
      
      -- Return a formal Figure element
      return pandoc.Figure(content, {caption})
    end
  end
  return el
end